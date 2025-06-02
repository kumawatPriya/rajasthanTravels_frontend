import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Skeleton, Stack, Typography } from "@mui/material";
import { FaRegHeart,FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Config } from "../Utils/Config";
import { useSelector } from "react-redux";

function TravelCards() {
   const [api, setApi] = useState([]);
   const [loading, setLoading] = useState(true);
   const { userId } = useSelector((state) => state.auth);
   console.log(userId, 'userid')
   const getCards = async () => {
      try{
      const response = await fetch(`${Config?.Get_Special_packages}`);
      const getres = await response.json();
      setApi(getres?.data);
      console.log(getres?.data, 'cardsData');}
      catch(error){
         console.log(error, 'Error in fetching API response.')
      }
      finally{
         setLoading(false)
      }
   };
   const [wishlist, setWishlist] = useState([]);

   const handleWishlistItem = (id)=>{
      setWishlist((pre) => pre.includes(id) ? pre.filter((itemId)=> itemId !== id) : [...pre, id])
   }

   useEffect(() => {
      getCards();
   }, [userId]);

   return (
      <>
         <Box textAlign="center" mb={5} mt={8}>
            <Typography variant="h4" fontWeight={700} color="#14183E">
               Special Packages
            </Typography>
            <Typography variant="body1" color="#5E6282" mt={1}>
               Explore curated travel experiences tailored just for you
            </Typography>
         </Box>
        
            <Grid container spacing={4} justifyContent="center">

               {loading? [1, 2, 3].map((s) => (
              <Grid item xs={12} sm={6} md={4} key={s}>
                  <SkeletonCard />
              </Grid>
            )) :
          (   api?.length > 0 ? api?.map((data, index) => {
                  return (
                     <>
                        <Grid
                           item
                           xs={12}
                           sm={6}
                           md={4}
                           key={index}
                           justifyContent="center">
                           <motion.div 
                            
                              // initial="hidden"
                              // whileInView="show"
                              whileHover="hover"
                              
                              // viewport={{ once: true }}
                              >
                              <Card sx={{
                                 position: "relative", width: "340px", borderRadius: "8px", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)", overflow: "hidden",
                                 transition: "transform 0.3s ease",
                                 // "&:hover": {transform: "translateY(-5px)",}
                              }}>
                                 <IconButton onClick={() => handleWishlistItem(data._id)}
                                    sx={{ fontSize: 20, backgroundColor: "#dedcdc78", position: "absolute", top: "5px", right: "5px", zIndex: 2, 
                                       ":focus-visible": {
                                       backgroundColor: 'none'
                                    }}}>
                                   {wishlist.includes(data._id) ? <FaHeart color='red'/> : <FaRegHeart color="white" />}
                                 </IconButton>
                                  <Box sx={{ height: 200, overflow: "hidden" }}>
                                       <motion.img
                                         variants={{
                                           rest: { scale: 1 },
                                           hover: { scale: 1.1 },
                                         }}
                                         transition={{ duration: 0.4, ease: "easeInOut" }}
                                         src={data.image}
                                         alt={data.title}
                                         style={{
                                           width: "100%",
                                           height: "100%",
                                           objectFit: "cover",
                                         }}
                                       />
                                     </Box>
                                 <CardContent sx={{ p: 2 }}>
                                    <Typography fontSize="17px" fontWeight={600} color="#3c3c3c" mb={1}>
                                       {data.title}
                                    </Typography>
                                    <Typography variant="subtitle2" color="#5E6282" mb={1} textOverflow="ellipsis"
                                       whiteSpace="nowrap"
                                       overflow="hidden"
                                       width="95%">
                                       {data.subtitle}
                                    </Typography>
                                    <Typography variant="body2" color="#5E6282" mb={1}>
                                       Trip Days – {data.duration}
                                    </Typography>
                                    <Typography
                                       fontSize="14px"
                                       fontFamily="system-ui"
                                       textOverflow="ellipsis"
                                       whiteSpace="nowrap"
                                       overflow="hidden"
                                       width="95%"
                                       fontWeight={600}
                                       color="#414141">
                                       {data.destination}
                                    </Typography>
                                    <Stack flexDirection='row' alignItems='end'>
                                    <Typography
                                       variant="body1"
                                       fontSize="14px"
                                       color="#e20303" mr='4px'
                                       fontWeight={600}
                                       mt={1}>
                                       {data.price}
                                    </Typography>
                                    <Typography fontSize='13px' color="grey">
                                       per person
                                    </Typography>
                                    </Stack>
                                 </CardContent>
                                 <Stack sx={{ px: 2, pt: 0, pb: 2,justifyContent:'center', alignContent:'center', flexWrap: 'wrap' }} >
                                    <Button
                                       variant="contained"
                                       sx={{
                                          // boxShadow: 'none',
                                          width: "40%", background: "#18a5b2", borderRadius: "2px", textTransform: "none",
                                          fontWeight: 500,
                                          "&:hover": { backgroundColor: "#278a96", },
                                       }}>
                                      Book Now
                                    </Button>
                                 </Stack>
                              </Card>
                           </motion.div>
                        </Grid>
                     </>
                  );
               }): (<><Typography>No data found</Typography></>))
                }
            </Grid>
       
         {/* <Button>Hello world</Button> */}
      </>
   );
}

const SkeletonCard = () => (
  <Card
    sx={{
      width: 340,
      borderRadius: 2,
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
    }}
  >
    <Skeleton variant="rectangular" height={200} />
    <CardContent>
      <Skeleton width="60%" height={30} />
      <Skeleton width="90%" />
      <Skeleton width="50%" />
      <Skeleton width="80%" />
    </CardContent>
    <Box sx={{ px: 2, pb: 2 }}>
      <Skeleton variant="rectangular" width="40%" height={36} />
    </Box>
  </Card>
);

export { TravelCards };
