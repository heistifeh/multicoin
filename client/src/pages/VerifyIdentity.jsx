import { get } from "mongoose";
import React from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const VerifyIdentity = () => {
  // for spinner
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  // for image upload
  const [formData, setFormData] = useState({
    imageUrl: [],
  });
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const navigate = useNavigate();

  const uploadFile = async (img) => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "images_preset");

    try {
      let cloudName = "dyvvq1ycl";
      let resourceType = "image";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (frontImage && backImage) {
      try {
        setLoading(true);
        // Upload image file
        const frontImgUrl = await uploadFile(frontImage);
        const backImgUrl = await uploadFile(backImage);
        // Send backend api request
        // await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}/api/videos`, { imgUrl, videoUrl });
        // Reset states
        setFormData({
          ...formData,
          imageUrl: [frontImgUrl, backImgUrl],
        });
        setFrontImage(null);
        setBackImage(null);
        console.log("File upload success!");
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      setImageUploadError(
        "Image upload failed, you can only upload two images."
      );
    }
  };
  //   const handleSubmit = (e)=>{
  // e.preventDefault();
  // setFormData({
  //   ...formData,
  //   [e.target.id]: e.target.value,
  // })
  //   }
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.imageUrl.length < 2 || !formData.ssn) {
      setImageUploadError("please upload both front and back images");
    } else {
      console.log("submitted!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <span>SSN: </span>
          <input
            type="text"
            placeholder="ssn"
            id="ssn"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="img">Front Image:</label>
          <br />
          <input
            type="file"
            accept="image/*"
            id="img"
            onChange={(e) => setFrontImage((prev) => e.target.files[0])}
          />
        </div>
        <br />
        <div>
          <label htmlFor="img">Back Image:</label>
          <br />
          <input
            type="file"
            accept="image/*"
            id="img"
            onChange={(e) => setBackImage((prev) => e.target.files[0])}
          />
        </div>
        <br />
        <button onClick={handleImageUpload} type="button">
          Upload
        </button>
        {imageUploadError && <p style={{ color: "red" }}>{imageUploadError}</p>}

        <button type="submit">Submit form</button>
      </form>

      {loading && (
        <div className="sweet-loading">
          <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
          <input
            value={color}
            onChange={(input) => setColor(input.target.value)}
            placeholder="Color of the loader"
          />

          <ClipLoader
            color={color}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </div>
  );
};

export default VerifyIdentity;
