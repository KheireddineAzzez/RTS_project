import React, {memo,useState} from 'react'

import { StreamingPlugin, RealTimeScale } from 'chartjs-plugin-streaming';
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2/dist";
import "chartjs-adapter-luxon";
import {Arduino_uno, Ultra_sound_collection} from "../api/Collections"
import {useFind, useSubscribe} from "meteor/react-meteor-data";
Chart.register(StreamingPlugin,RealTimeScale);



export const   Ultra_sound=memo(({data_arduino} )=>{
	const [count, setCount] = useState(0);



	const  Stream= memo(({data_arduino}) => {


		const onRefresh = chart => {


			const now = Date.now();
			const Y_data= Arduino_uno.find().fetch()
			const  Current_Data_Duratuion = {x: now, y: Y_data[0] ?  Y_data[0].Ulra_sound.Duration      :0}
			const  Current_Data_Distance = {x: now, y: Y_data[0] ?  Y_data[0].Ulra_sound.Distance      :0}


			chart.data.datasets[0].data.push(Current_Data_Duratuion)
			chart.data.datasets[0].data= chart.data.datasets[0].data


			chart.data.datasets[1].data.push(Current_Data_Distance)
			chart.data.datasets[1].data= chart.data.datasets[1].data
		};

		const data={
			datasets: [
				{
					label: "Duration",
					backgroundColor: "rgba(255, 99, 132, 0.5)",
					borderColor: "rgb(255, 99, 132)",
					borderDash: [8, 4],
					fill: true,
					data: []
				},

				{
					label: "Distance",
					backgroundColor: "rgba(125, 30, 125, 0.5)",
					borderColor: "rgb(125, 99, 132)",
					borderDash: [8, 4],
					fill: true,
					data: []
				}
			]
		}
		const options={
			scales: {
				x: {
					type: "realtime",
						realtime: {
							duration: 20000,  // data in the past 20000 ms will be displayed
							refresh: 500,    // onRefresh callback will be called every 1000 ms
							delay: 1000,      // del
							pause: false,     // chart is not paused
							ttl: undefined,   // data will be automatically deleted as it disappears off the chart
							frameRate: 30,
							onRefresh:  onRefresh
					}
				}
			}
		}


		return (

			<Line data={data} options={options}/>
		);
	})


	return(<div className="" >   <Stream  /> </div>)
})
