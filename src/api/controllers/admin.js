import { Vimeo } from 'vimeo';
import { sermonVideoUpload } from '../helpers/vimeoHelpers';
import { sermonAudioUpload } from '../helpers/cloudinaryHelpers';

const client = new Vimeo(
  '7a9a547d9bc0c012bc7e854c65702af4c60f2757',
  'TX1oENQ9ZtUWSXrsoieGXiV1Y15uJVuPzAf4OaFzKaeLZgOK9U0L4PfjuFVmIsHDdSZrr/TBHR52tAvH+hXpHAvFZGOU13w5u7gbTaEDb14y3qH+/xf1TKPY8uAv6041',
  'e5404b5a9d3a4e1f765c634d423d472b'
);

export const adminUploadMedia = (req, res) => {
  const videoUrl = sermonVideoUpload(client, req);
  const audioUrl = sermonAudioUpload(req);
  res.json({
    url: {}
  });
};
