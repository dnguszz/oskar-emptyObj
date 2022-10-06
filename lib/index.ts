export function isEmptyObj(Obj: Object): boolean {
  if (Object.keys(Obj).length === 0) {
    return true;
  } else return false;
}

export function test() {
  alert("정상작동");
}
