import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Props {
  title: string
}

const Table: React.FC<Props> = (props: Props) => {

  const { title } = props;

  const { data, getting } = useSelector((state: RootState) => state.referencia);

	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">
				<div className="rounded-t mb-0 px-4 py-3 border-0">
					<div className="flex flex-wrap items-center">
						<div className="relative w-full px-4 max-w-full flex-grow flex-1">
							<h3 className="font-semibold text-lg text-white">{ title }</h3>
						</div>
					</div>
				</div>
				<div className="block w-full overflow-x-auto">
					{/* Projects table */}
					<table className="items-center w-full bg-transparent border-collapse">
						<thead>
							<tr>
								<th className="p-4 align-middle border border-solid border-l-0 border-r-0 text-xs uppercase whitespace-no-wrap font-semibold text-left bg-blue-800 text-blue-300 border-blue-700">
									Metric
								</th>
								<th className="p-4 align-middle border border-solid border-l-0 border-r-0 text-xs uppercase whitespace-no-wrap font-semibold text-left bg-blue-800 text-blue-300 border-blue-700">
									Value
								</th>
							</tr>
						</thead>
						<tbody>
							{	getting && (
                  <tr>
                    <th colSpan={2} className="border-0 p-4 align-middle text-xs whitespace-no-wrap text-center flex items-center">
                      Loading...
                    </th>
                  </tr>
                )
              }
              {
                data.map((item: any, index: number) => {
                  const lastValue = item[1].values[item[1].values.length - 1];
                  return (
                    <tr key={index}>
                      <th className="border-0 p-4 align-middle text-xs whitespace-no-wrap text-left flex items-center">
                        {item[0]}
                      </th>
                      <td className="border-0 p-4 align-middle text-xs whitespace-no-wrap">
                        {lastValue}
                      </td>
                    </tr>
                  );
                })
              }
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default Table;
