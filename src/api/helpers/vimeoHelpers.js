export const confirmUploadStatus = async (client, uri) => {
  await client.request(uri, function (error, body, status_code, headers) {
    // all these console logs gatz show too o!!
    if (body.transcode.status === 'complete') {
      console.log('Your video finished transcoding.');
    } else if (body.transcode.status === 'in_progress') {
      console.log('Your video is still transcoding.');
    } else {
      console.log('Your video encountered an error during transcoding.');
    }
  });
};

export const getVideoUrl = async (client, uri) => {
  await client.request(uri, function (error, body, statusCode, headers) {
    let videoLink;
    if (error) {
      videoLink = `Server reported:  + ${error}`;
      return videoLink;
    }
    if (body.link) {
      videoLink = `Your video link is:  ${body.link}`;
      return videoLink;
    }
  });
};

export const sermonVideoUpload = async (client, req) => {
  const videoName = req.file.path;
  await client.upload(
    videoName,
    {
      name: 'first video',
      description: 'description of strange video'
    },
    function (uri) {
      // the responses from this function gatz show, all of them.
      confirmUploadStatus(client, uri);
      getVideoUrl(client, uri);
    },
    function (bytesUploaded, bytesTotal) {
      const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
      // this message gatz show
      console.log(
        `Your video is uploading, Have small patience: ${percentage} %`
      );
    },
    function (error) {
      // also if this fails, no fail to show message
      console.log(`Failed because: ${error}`);
    }
  );
};
