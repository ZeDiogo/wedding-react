import { Button } from "@material-ui/core";

export default function RegisterPage() {
  
    return (
      <div className="flex">
        <div className="justify-center ">
          <p className="font-bad-script">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor rhoncus dolor purus non enim. Odio ut enim blandit volutpat maecenas volutpat blandit. Aliquet nec ullamcorper sit amet risus. Et egestas quis ipsum suspendisse.
          </p>
        </div>
        <h1 className="text-black">
            REGISTER PAGE
        </h1>
        <Button variant="contained" color="primary">Contained</Button>
        {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button> */}
        <input type="checkbox" className="form-checkbox rounded text-pink-500" />
      </div>
    );
  }