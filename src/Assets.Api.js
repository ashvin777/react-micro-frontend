import Axios from 'axios';
import path from 'path';

let mfManifestFile = 'asset-manifest.json';

function getManifest(mfHost) {
  let url = path.join(mfHost, mfManifestFile);

  return Axios.request({
    url,
    method: 'GET'
  });
}

export default {
  getManifest
};
