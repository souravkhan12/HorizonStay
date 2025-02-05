import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success("Booking successfully Deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, mutate };
}

export default useDeleteBooking;
