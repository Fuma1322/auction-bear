import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function AuctionTable() {
  const firstBlock = [
    ["Make", "Mercedes-Benz"],
    ["Model", "SLS AMG"],
    ["Mileage", "215,034"],
    ["VIN", "WDDRJ7HA6BA003322"],
    ["Title Status", "Clean (GA)"],
    ["Location", "Masowe 3"],
    ["Seller", "Tankiso Fuma"],
  ];

  const secondBlock = [
    ["Engine", "6.2L V8"],
    ["Drivetrain", "Rear-wheel drive"],
    ["Transmission", "Automatic (7-Speed)"],
    ["Body Style", "Coupe"],
    ["Exterior Color", "Iridium Silver Metallic"],
    ["Interior Color", "Classic Red"],
    ["Seller Type", "Dealer"],
  ];

  return (
    <div className="overflow-x-auto">
      <Table className="w-full border-gray-300 rounded-xl">
        <TableBody>
          {/* Combine both blocks for small screens */}
          {firstBlock.map(([heading1, value1], idx) => {
            const [heading2, value2] = secondBlock[idx];

            const isFirstRow = idx === 0;
            const isLastRow = idx === firstBlock.length - 1;

            return (
              <TableRow key={idx} className="border-gray-200">

                {/* Large screens: two blocks side by side */}
                <TableCell
                  className={`font-semibold bg-gray-50 w-[140px] hidden md:table-cell ${
                    isFirstRow ? "rounded-tl-xl" : ""
                  } ${isLastRow ? "rounded-bl-xl" : ""}`}
                >
                  {heading1}
                </TableCell>
                <TableCell
                  className={`w-[180px] hidden md:table-cell ${
                    isFirstRow ? "" : ""
                  }`}
                >
                  {value1}
                </TableCell>

                <TableCell
                  className={`font-semibold bg-gray-50 w-[160px] hidden md:table-cell ${
                    isFirstRow ? "" : ""
                  }`}
                >
                  {heading2}
                </TableCell>
                <TableCell
                  className={`w-[200px] hidden md:table-cell ${
                    isFirstRow ? "rounded-tr-xl" : ""
                  } ${isLastRow ? "rounded-br-xl" : ""}`}
                >
                  {value2}
                </TableCell>

                {/* Small screens: stacked */}
                <TableCell colSpan={4} className="px-2 py-2 md:hidden">
                  <div className="flex justify-between border-gray-200 py-1">
                    <span className="font-semibold">{heading1}</span>
                    <span>{value1}</span>
                  </div>
                  <div className="flex justify-between border-gray-200 py-1">
                    <span className="font-semibold">{heading2}</span>
                    <span>{value2}</span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}