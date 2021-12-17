/* PERSONAL HOMEPAGE */
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  function success() {

 form.reset();
 status.classList.add('success')
    status.innerHTML = "Thanks!";
  }
  function success() {

    form.reset();
    status.classList.add('error')
    status.innerHTML = "Error"
  }
form.addEventListener("submit", handleSubmit)
</script>

console.log('Welcome to my personal homepage!')

