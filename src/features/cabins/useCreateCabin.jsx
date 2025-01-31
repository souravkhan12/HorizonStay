import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createEditCabin } from "../../services/apiCabins";

function useCreateCabin({ reset }) {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New Cabin created Succesfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      if (reset) reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}

export default useCreateCabin;
