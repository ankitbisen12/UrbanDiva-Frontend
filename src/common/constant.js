export function chooseTextColor(status){
    switch (status) {
      case "Pending":
        return "text-purple-600";
      case "Dispatched":
        return "text-yellow-600";
      case "Delivered":
        return "text-green-600";
      case "Cancelled":
        return "text-red-600";
      case "InWarehouse":
        return "text-black-600";
      case "Refunded":
        return "text-black-500";
      default:
        break;
    }
  }