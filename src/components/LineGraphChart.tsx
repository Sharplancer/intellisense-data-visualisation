import { Chart } from "chart.js";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Props {
  title: string
}

declare global {
  interface Window {
    myLine?: any;
  }
}

const LineGraphChart: React.FC<Props> = (props: Props) => {
  const { title } = props;

  const { tk1Data, getting, error } = useSelector((state: RootState) => state.referencia);

  useEffect(() => {
		if (getting || tk1Data.length === 0)
			return;

		const colours = [
			"#4c51bf",
			"#e41a1c",
			"#377eb8",
			"#999999",
			"#4daf4a",
			"#984ea3",
			"#ffff33",
			"#a65628",
			"#f781bf",
			"#ff7f00",
		];

		let datasets: any = [];
		// datasets
		tk1Data.forEach((item, i) => {
			datasets.push({
				label: item[0],
				backgroundColor: colours[i],
				borderColor: colours[i],
				data: item[1].values,
				fill: false,
			});
		});

		const config = {
			type: "line",
			data: {
				labels: tk1Data[0][1].times,
				datasets,
			},
			options: {
				maintainAspectRatio: false,
				responsive: true,
				title: {
					display: false,
					text: "Charts",
					fontColor: "white",
				},
				legend: {
					labels: {
						fontColor: "white",
					},
					align: "end",
					position: "bottom",
				},
				tooltips: {
					mode: "index",
					intersect: false,
				},
				hover: {
					mode: "nearest",
					intersect: true,
				},
				scales: {
					xAxes: [
						{
							ticks: {
								fontColor: "rgba(255,255,255,.7)",
							},
							display: true,
							scaleLabel: {
								display: true,
								labelString: "Times",
								fontColor: "white",
							},
							gridLines: {
								display: true,
								borderDash: [2],
								borderDashOffset: [2],
								color: "rgba(33, 37, 41, 0.3)",
								zeroLineColor: "rgba(0, 0, 0, 0)",
								zeroLineBorderDash: [2],
								zeroLineBorderDashOffset: [2],
							},
						},
					],
					yAxes: [
						{
							ticks: {
								fontColor: "rgba(255,255,255,.7)",
							},
							display: true,
							scaleLabel: {
								display: true,
								labelString: "Value",
								fontColor: "white",
							},
							gridLines: {
								borderDash: [3],
								borderDashOffset: [3],
								drawBorder: false,
								color: "rgba(255, 255, 255, 0.15)",
								zeroLineColor: "rgba(33, 37, 41, 0)",
								zeroLineBorderDash: [2],
								zeroLineBorderDashOffset: [2],
							},
						},
					],
				},
			},
		};
		const ctx = (document.getElementById("line-chart-2") as any).getContext("2d");
    window.myLine = new Chart(ctx, config as any);
	}, [tk1Data, getting, error]);

	const loading = () => {
		if (getting) {
			return (<div className="text-white text-xl font-semibold whitespace-no-wrap text-center">Loading data...</div>);
		}
	};

	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800">
				<div className="rounded-t mb-0 px-4 py-3 bg-transparent">
					<div className="flex flex-wrap items-center">
						<div className="relative w-full max-w-full flex-grow flex-1">
							<h6 className="uppercase text-gray-200 mb-1 text-xs font-semibold">
								Overview
							</h6>
							<h2 className="text-white text-xl font-semibold">
								{ title }
							</h2>
						</div>
					</div>
				</div>
				<div className="p-4 flex-auto">
					{/* Chart */}
					<div className="relative h-350-px">
						{ loading() }
						<canvas id="line-chart-2"></canvas>
					</div>
				</div>
			</div>
		</>
	);
}

export default LineGraphChart;
