import Campus from "../models/campusModel"

class campusController{
    createCampus = (req, res)=>{
        const campus = new Campus({
            name: req.body.name,
            location: req.body.location,
            image: req.body.image

        })
        campus.save()
        .then((campus)=>{
            res.status(201).json({
                status: "success",
                message: "campus added successfully !!!!",
                campus
            })
            console.log("campus created")
        })
        .catch((error)=>{
            res.status(500).json({
                status:"fail",
                message:"failed to create/add a campus",
                error
            })

        })
    }
}

export default campusController;