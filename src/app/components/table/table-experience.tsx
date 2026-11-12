import { useLocale } from "@/context/useLocale";
import { TableContent } from "@/types/types";

type Props = {
   content: TableContent;
};

export default function TableExperience({ content }: Props) {
   const localeContext = useLocale()?.locale === "en" ? "en" : "fr";
   return (
      <table className="mx-auto table-auto border border-primary">
         <thead className="border border-primary p-2">
            <tr className="border border-primary p-2">
               {content &&
                  content.headings.map((heading, index) => {
                     return (
                        <th key={index} className="border border-primary p-2">
                           {heading[localeContext]}
                        </th>
                     );
                  })}
            </tr>
         </thead>
         <tbody>
            {content &&
               content.rows.map((row, index) => {
                  return (
                     <tr key={index} className="border border-primary p-2 ">
                        {row.map((element, index) => {
                           return (
                              <td
                                 key={index}
                                 className="border border-primary p-2"
                              >
                                 {element[localeContext]}
                              </td>
                           );
                        })}
                     </tr>
                  );
               })}
         </tbody>
      </table>
   );
}
