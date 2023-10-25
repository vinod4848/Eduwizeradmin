import React, { useState } from "react";
import { Input, Label, Button } from "reactstrap"; // Assuming Button component from reactstrap
import { uploadCVAPI } from "../../../Services/api";

const UploadFile = ({ uploadFileProp, editData, accept }) => {
  const [localUrl, setLocalUrl] = useState(editData.url);
  const [fileType, setFileType] = useState(editData.fileType);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [showFileInput, setShowFileInput] = useState(false);
  const [showYoutubeInput, setShowYoutubeInput] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("admin", true);
    formData.append("file", e.target.files[0]);
    setFileType(file.type);
    setLocalUrl(URL.createObjectURL(file));
    const uploadCvResponse = await uploadCVAPI(formData);
    const url = uploadCvResponse.data.data;
    uploadFileProp(file, url, file.type);
  };

  const handleYoutubeUrl = () => {
    const youtubeId = extractYoutubeId(youtubeUrl);
    if (youtubeId) {
      setFileType("youtube");
      setLocalUrl(`https://www.youtube.com/embed/${youtubeId}`);
      uploadFileProp(null, `https://www.youtube.com/embed/${youtubeId}`, "youtube");
    }
  };

  const extractYoutubeId = (url) => {
    const match = url.match(/(?:\?v=|\/embed\/|\/\d\/|\/vi\/|\/v\/|https?:\/\/(?:www\.)?youtube\.com\/watch(?:\.php)?\?v=|https?:\/\/(?:www\.)?youtube\.com\/embed\/|https?:\/\/youtu.be\/)([^&\/?#]+)/i);
    return match && match[1];
  };

  return (
    <>
      <Button onClick={() => setShowFileInput(true)}>Upload File</Button>
      <Button onClick={() => setShowYoutubeInput(true)}>Show YouTube Video</Button>

      {showFileInput && (
        <>
          <Input
            accept={accept}
            multiple={false}
            type="file"
            name="file"
            id="exampleFile"
            onChange={(e) => {
              handleFile(e);
            }}
          />
          <Button onClick={() => setShowFileInput(false)}>Cancel</Button>
        </>
      )}

      {showYoutubeInput && (
        <>
          <Input
            type="text"
            placeholder="Enter YouTube URL"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />
          <Button onClick={handleYoutubeUrl}>Show YouTube Video</Button>
          <Button onClick={() => setShowYoutubeInput(false)}>Cancel</Button>
        </>
      )}

      {fileType.includes("image") && (
        <img className="icon w-auto" height="300px" alt="" src={localUrl} />
      )}
      {fileType.includes("video") && (
        <video width="320" src={localUrl} height="240" controls>
          {/* Your browser does not support the video tag. */}
        </video>
      )}
      {fileType.includes("youtube") && (
        <iframe
          src={localUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          height="200px"
        />
      )}
    </>
  );
};

export default UploadFile;
