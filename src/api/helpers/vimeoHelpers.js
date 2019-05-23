export const confirmUploadStatus = (client, uri) => {
  client.request(uri, function (error, body, status_code, headers) {
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

export const getVideoUrl = (client, uri) => {
  client.request(uri, function (error, body, statusCode, headers) {
    if (error) {
      console.log('There was an error making the request.');
      console.log(`Server reported:  + ${error}`);
      return;
    }

    console.log(`Your video link is:  ${body.link}`);
  });
};
