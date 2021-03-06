import Axios from 'axios';
import path from 'path';

let mfManifestFile = 'asset-manifest.json';

function getManifest(host, pathname) {
  let url = host + path.join(pathname, mfManifestFile);

  return Axios.request({
    url,
    method: 'GET'
  });
}

export default {
  getManifest
};
