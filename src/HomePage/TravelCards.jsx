import React, { useEffect, useState } from "react";
import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Grid, IconButton, Skeleton, Stack, Typography } from "@mui/material";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Config } from "../Utils/Config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EnquiryDialog from "../HolidayPackages/EnquiryDailog";

function TravelCards() {
   const [api, setApi] = useState([]);
   const [loading, setLoading] = useState(true);
   const [openDialog, setOpenDialog] = useState(false);
   const { userId } = useSelector((state) => state.auth);
   const [selectedPackage, setSelectedPackage] = useState(null)
   const navigate = useNavigate();
   console.log(userId, 'userid')
   
   const handleOpenDialog = (pkg)=>{
      setOpenDialog(true);
      setSelectedPackage(pkg)
   }
   const handleCloseDialog = (pkg)=>{
      setOpenDialog(false);
      setSelectedPackage(null)
   }
   const getCards = async () => {
      try {
         const response = await fetch(`${Config?.Get_Special_packages}`);
         const getres = await response.json();
         setApi(getres?.data);
         console.log(getres?.data, 'cardsData');
      }
      catch (error) {
         console.log(error, 'Error in fetching API response.')
      }
      finally {
         setLoading(false)
      }
   };
   const [wishlist, setWishlist] = useState([]);

   const handleWishlistItem = (id) => {
      setWishlist((pre) => pre.includes(id) ? pre.filter((itemId) => itemId !== id) : [...pre, id])
   }

   useEffect(() => {
      getCards();
   }, []);

   const handleViewDetails = (id)=>{
        navigate(`/packageDetails/${id}`)
   }
   return (
      <>
         <Box textAlign="center" mb={5} mt={8}>
            <Typography variant="h4" fontWeight={700} color="#14183E" fontSize={{xs: '28px', md: '34px'}} mb={{xs: 1, md: 0}}>
               Special Packages
            </Typography>
            <Typography variant="body1" color="#5E6282" mt={1} fontSize={{xs: '14px', md: '16px'}} width={{xs: '80%', md: '100%'}} margin={{xs: 'auto'}}>
               Explore curated travel experiences tailored just for you
            </Typography>
         </Box>

         <Grid container spacing={4} justifyContent="center">

            {loading ? [1, 2, 3].map((s) => (
               <Grid item xs={12} sm={6} md={4} key={s}>
                  <SkeletonCard />
               </Grid>
            )) :
               (api?.length > 0 ? api?.map((data, index) => {
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
                                    sx={{
                                       fontSize: 20, backgroundColor: "#dedcdc78", position: "absolute", top: "5px", right: "5px", zIndex: 2,
                                       ":focus-visible": {
                                          backgroundColor: 'none'
                                       }
                                    }}>
                                    {wishlist.includes(data._id) ? <FaHeart color='red' /> : <FaRegHeart color="white" />}
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
                                    <Typography fontSize="17px" fontWeight={600} color="#3c3c3c" mb={0}>
                                       {data.title}
                                    </Typography>
                                    <Typography variant="subtitle2" color="#5E6282" mb={0.5} textOverflow="ellipsis"
                                       whiteSpace="nowrap"
                                       overflow="hidden"
                                       width="95%">
                                       {data.subtitle}
                                    </Typography>
                                    <Typography variant="body2" color="#5E6282" mb={0.6}>
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
                                    <Stack direction="row" spacing={1} alignItems="center" mb={0.5}>
                                       <Typography variant="body2" fontWeight={500} color="#ffb400">
                                          ⭐ {data.rating || "4.5"} {/* Add a rating field from backend */}
                                       </Typography>
                                       <Typography variant="caption" color="text.secondary">
                                          ({data.reviews || "120 reviews"})
                                       </Typography>
                                    </Stack>

                                    <Stack flexDirection='row' alignItems='end'>
                                       <Typography
                                          variant="body1"
                                          fontSize="14px"
                                          color="#e20303" mr='4px'
                                          fontWeight={600}
                                          mt={0}>
                                          Rs{data.price}
                                       </Typography>
                                       <Typography fontSize='13px' color="grey">
                                          per person
                                       </Typography>
                                    </Stack>
                                 </CardContent>
                                 <Stack alignItems='center' mb={4}>
                                    <ButtonGroup
                                       disableElevation
                                       variant="contained"
                                       sx={{
                                          borderRadius: "999px",
                                          overflow: "hidden",
                                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                       }}
                                    >
                                       <Button
                                       onClick={()=>{handleViewDetails(data?.id)}}
                                          sx={{
                                             backgroundColor: "#18a5b2",
                                             color: "#fff",
                                             fontWeight: 500,
                                             textTransform: "none",
                                             px: 3,
                                             // py: 1,
                                             "&:hover": {
                                                backgroundColor: "#15929d",
                                             },
                                          }}
                                       >
                                          View Details
                                       </Button>
                                       <Button
                                          sx={{
                                             backgroundColor: "#f58c00",
                                             color: "#fff",
                                             fontWeight: 500,
                                             textTransform: "none",
                                             px: 5,
                                             // py:1,
                                             "&:hover": {
                                                backgroundColor: "#e17a00",
                                             },
                                          }} onClick={()=>handleOpenDialog(data)}
                                       >
                                          Enquire
                                       </Button>
                                    </ButtonGroup>
                                 </Stack>
                              </Card>
                           </motion.div>
                        </Grid>
                     </>
                  );
               }) : (<><Typography>No data found</Typography></>))
            }
         </Grid>
         <EnquiryDialog open={openDialog} onClose={handleCloseDialog} packageDetails={{id: selectedPackage?.id, title: selectedPackage?.title}}/>
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
