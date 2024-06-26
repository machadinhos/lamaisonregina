import { useCallback, useEffect, useMemo, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Image from "next/image";
interface Props {
  sources: { image: string; _id: string }[];
}

export default function ProductCarousel() {
  const products = useMemo(
    () => [
      {
        image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
        _id: "1",
      },
      {
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
        _id: "2",
      },
      {
        image:
          "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
        _id: "3",
      },
    ],
    [],
  );
  const [leftProduct, setLeftProduct] = useState(products.length - 1);
  const [rightProduct, setRightProduct] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [movingForward, setMovingForward] = useState(true);
  const [moving, setMoving] = useState(false);
  const moveProduct = useCallback(
    (position: number, forward: boolean) => {
      setMovingForward(forward);
      if (forward) {
        if (position === products.length - 1) {
          return 0;
        }
        return position + 1;
      }
      if (position === 0) {
        return products.length - 1;
      }
      return position - 1;
    },
    [products],
  );

  const moveProducts = useCallback(
    (forward: boolean) => {
      if (!moving) {
        setMoving(true);
        setCurrentProduct((prevState) => moveProduct(prevState, forward));
        setLeftProduct((prevState) => moveProduct(prevState, forward));
        setRightProduct((prevState) => moveProduct(prevState, forward));
        setTimeout(() => setMoving(false), 500);
      }
    },
    [moving, moveProduct],
  );

  const isLeftProduct = (id: string) => {
    return id === products[leftProduct]._id;
  };
  const isRightProduct = (id: string) => {
    return id === products[rightProduct]._id;
  };
  const isCurrentProduct = (id: string) => {
    return id === products[currentProduct]._id;
  };

  const resolveTransform = (id: string) => {
    if (isLeftProduct(id)) {
      return "translateX(-100%)";
    } else if (isRightProduct(id)) {
      return "translateX(100%)";
    } else if (isCurrentProduct(id)) {
      return "translateX(0)";
    } else return "translateX(-100%)";
  };

  const resolveOpacity = (id: string) => {
    if (isLeftProduct(id)) {
      return movingForward ? 1 : 0;
    } else if (isRightProduct(id)) {
      return movingForward ? 0 : 1;
    } else if (isCurrentProduct(id)) {
      return 1;
    } else return 0;
  };
  useEffect(() => {
    const interval = setInterval(() => moveProducts(true), 5000);
    return () => clearInterval(interval);
  }, [moveProducts]);
  if (products.length < 1) {
    return <></>;
  }
  return (
    <>
      <Typography variant={"h3"}>Images of the week</Typography>
      <Box
        width={500}
        height={500}
        maxWidth={"90vw"}
        maxHeight={"90vw"}
        overflow={"hidden"}
        position={"relative"}
        sx={{ backgroundColor: "primary.main" }}
        display={"flex"}
        alignItems={"center"}
        borderRadius={5}
      >
        {products.map((product) => (
          <Box
            key={product._id}
            width={"100%"}
            height={"100%"}
            position={"absolute"}
            sx={{
              transition: "transform 0.5s ease-in-out",
              opacity: resolveOpacity(product._id),
              transform: resolveTransform(product._id),
              top: 0,
              left: 0,
            }}
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <Box width={"100%"} height={"100%"} position={"relative"}>
              <Image fill src={product.image} alt={product.image} />
            </Box>
          </Box>
        ))}
        <IconButton color={"secondary"} sx={{ position: "absolute", left: 0 }} onClick={() => moveProducts(false)}>
          <ArrowBack />
        </IconButton>
        <IconButton color={"secondary"} sx={{ position: "absolute", right: 0 }} onClick={() => moveProducts(true)}>
          <ArrowForward />
        </IconButton>
      </Box>
    </>
  );
}
