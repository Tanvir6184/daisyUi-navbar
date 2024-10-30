import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LineChartComponent = () => {
    const Marks = [
        { "name": "Alice Johnson", "finance": 78, "english": 85 },
        { "name": "Brian Smith", "finance": 88, "english": 92 },
        { "name": "Catherine Lee", "finance": 92, "english": 78 },
        { "name": "David Martinez", "finance": 76, "english": 83 },
        { "name": "Emily Zhang", "finance": 85, "english": 91 },
        { "name": "Franklin Cooper", "finance": 81, "english": 79 },
        { "name": "Grace Kim", "finance": 89, "english": 95 },
        { "name": "Hannah White", "finance": 73, "english": 87 },
        { "name": "Isaac Rivera", "finance": 82, "english": 80 },
        { "name": "Julia Patel", "finance": 90, "english": 88 }
    ];

    return (
        <div>
            <LineChart width={1000} height={400} data={Marks}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis/>
                <Tooltip />
                <Line type="monotone" dataKey="finance" stroke="blue" />
                <Line type="monotone" dataKey="english" stroke="green" />
            </LineChart>
        </div>
    );
};

export default LineChartComponent;
