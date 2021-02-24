import app from './app';
import { Main } from './main';

const server = (): void => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(
          `----The server is running on port ${process.env.PORT || 3000}----`,
        );
        const main = new Main();


        console.log("Winners: ", main.main())
      });
};

export default server();