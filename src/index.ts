import { server } from "./server/server";
const PORT = 3333;

server.listen(PORT, () => console.log(`Escutando a porta ${PORT}`));
