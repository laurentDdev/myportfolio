
import {Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const GraphFront = ({data} : any) => {
    const colors = ['#61dafb', '#82ca9d', '#8884d8', '#ffc658', '#ff7300', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <BarChart width={500} height={300}  data={data}>
                <CartesianGrid stroke="#ccc" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="skillScore" label={{ position: 'top' }}>
                    {data.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
    );
};

export default GraphFront;
