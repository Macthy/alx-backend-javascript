export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to wait for the first promise to settle (resolve or reject)
  return Promise.race([chinaDownload, USDownload]);
}
