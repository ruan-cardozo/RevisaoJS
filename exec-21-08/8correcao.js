function externa(param) {
    function interna() {
      return 2 * param;
    }
    return interna;
  }
  let dobra = externa(3);
  console.log(dobra());