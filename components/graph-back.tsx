
import {Cell, Legend, Pie, PieChart, Tooltip} from "recharts";

const GraphBack = ({data}: any) => {
    const COLORS = ['#82ca9d', '#8884d8', '#ffc658', '#ff7300', '#FF8042'];
    return (

        <PieChart width={500} height={300} >
            <Pie dataKey="skillScore" data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                {data.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>

    );
};

export default GraphBack;
