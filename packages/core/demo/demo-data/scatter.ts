import { colors } from "./colors";

export const scatterData = {
	labels: ["Qty", "More", "Sold", "Restocking", "Misc"],
	datasets: [
		{
			label: "Dataset 1",
			backgroundColors: [colors[0]],
			data: [
				32100,
				23500,
				53100,
				42300,
				12300
			]
		},
		{
			label: "Dataset 2",
			backgroundColors: [colors[1]],
			data: [
				34200,
				53200,
				42300,
				21400,
				0
			]
		},
		{
			label: "Dataset 3",
			backgroundColors: [colors[2]],
			data: [
				41200,
				23400,
				34210,
				1400,
				42100
			]
		}
	]
};

export const scatterOptions = {
	accessibility: false,
	scales: {
		x: {
			title: "2018 Annual Sales Figures",
		},
		y: {
			title: "Dollars (CAD)",
			yMaxAdjuster: yMax => yMax * 1.2,
			yMinAdjuster: yMin => yMin * 1.2,
			formatter: axisValue => `${axisValue / 1000}k`,
			thresholds: [
				{
					range: [-20000, 30000],
					theme: "success"
				},
				{
					range: [30000, 40000],
					theme: "danger"
				},
				{
					range: [40000, 70000],
					theme: "warning"
				}
			]
		}
	},
	points: {
		radius: 4
	},
	legendClickable: true,
	containerResizable: true
};