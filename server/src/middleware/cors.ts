import cors from "cors";
import {AllowedHosts} from "../helper/constants";

const corsOptions = {
    origin: AllowedHosts,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

export default cors(corsOptions)
