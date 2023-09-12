require('dotenv').config();
async function main() {
    console.log(process.env.TEST)
}

main()
  .then(/*() => process.exit(0)*/)
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });