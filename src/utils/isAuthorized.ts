// TODO: remove
export default function isAuthorized() {
  return localStorage.getItem('jwt') !== null;
}
