
const asyncHandler=(fn)=>async()=>{
  try {
       await fn(req,res,next)
  } catch (error) {
      console.log(error)
     return res.status(500).json({
        success:false,
        message:error.message
      })
  }
}

export {asyncHandler}