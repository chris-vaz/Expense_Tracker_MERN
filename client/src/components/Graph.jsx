import React from 'react'
import { Chart,ArcElement } from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
import '../styles/graphstyle.css'


Chart.register(ArcElement);

const change ={
    data:{
        datasets: [{

            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        borderRadius:25,
        spacing:5,
        hoverBorderColor:'rgb(255, 255, 255)'
        }]
    },
    options:{
        cutout:120
    }
}

const Graph = () => {
    return (
        <div>
            <div className="flex justify-center max-w-xs mx-auto">
                <div className="item">
                    <div className="chart relative max-w-xs">
                        <Doughnut {...change}/>
                        <div className="absolute">
                        <h3 className=' mt-4 text-center font-bold title'>Total</h3>
                        <p className='absolute2 font-bold mt-3 text-center block text-3xl text-emerald-500'>$(0)</p>
                        </div>
                    </div>

                    <div className="flex flex-col py-10 gap-4">
                        {/* Labels */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graph