import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {ITempDto} from "../interfaces/ITempDto";
const Chart = (props: {data: ITempDto[]}) => {
    return (
        <div>
            <LineChart
                width={800}
                height={400}
                data={props.data}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="created_at" />
                <YAxis />
                <Tooltip />
                <Legend/>
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="field1" stroke="#ff7300" />
            </LineChart>
        </div>
    );
};

export default Chart;