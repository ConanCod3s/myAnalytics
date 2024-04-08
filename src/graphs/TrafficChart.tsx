import {Fragment, useEffect} from 'react';
// import {LineChart} from '@mui/x-charts/LineChart';
import {firebaseConfig} from "../firebase/FirebaseConfig.ts";
import axios from 'axios';
import {AppAuth} from "../firebase/FirebaseConfig.ts";

const TrafficChart = () => {

    useEffect(() => {
        if (AppAuth.currentUser === null || AppAuth.currentUser === undefined) return;
console.log(firebaseConfig.measurementId)
        const fetchData = async () => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const token: never = AppAuth.currentUser.accessToken;

                const today = new Date();
                const startDate = new Date(today.setDate(today.getDate() - 30));

                const formattedStartDate = startDate.toISOString().split('T')[0];
                const formattedEndDate = today.toISOString().split('T')[0];

                const url = `https://analyticsdata.googleapis.com/v1beta/properties/${firebaseConfig.measurementId}:runReport`;
                const params = {
                    "dateRanges": [{
                        "startDate": formattedStartDate, "endDate": formattedEndDate
                    }],
                    "dimensions": [{"name": "country"}],
                    "metrics": [{"name": "activeUsers"}]
                }
                try {
                    const response = await axios.post(url, params,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                    // const chartData = processChartData(response.data);
                    // setData(chartData);
                    // console.log('responseData', response.data)
                    return response.data;
                } catch (error) {
                    console.error('error', error);
                }
            }
        ;

        fetchData();
    }, []);
    if (!AppAuth.currentUser) return <Fragment/>
    else return <Fragment/>
    // const processChartData = (responseData: any) => {
    //     console.log('responseData', responseData)
    //     return <></>
    // }
    //     const rows = responseData.reports[0].data.rows;
    //     const labels = rows.map((row: any) => row.dimensions[0]);
    //     const trafficData = rows.map((row: any) => row.metrics[0].values[0]);
    //
    //     const chartDataset = {
    //         labels,
    //         datasets: [
    //             {
    //                 label: 'Website Traffic',
    //                 data: trafficData,
    //                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //                 borderColor: 'rgba(75, 192, 192, 1)',
    //                 borderWidth: 1,
    //             },
    //         ],
    //     };
    //
    //     return chartDataset;
    // };
    //
    // return (
    //     <div>
    //         <h2>Traffic over the Last 30 Days</h2>
    //         <LineChart
    //             xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
    //             series={[
    //                 {data}
    //             ]}
    //             width={500}
    //             height={300}
    //         />
    //     </div>
    // );
};

export default TrafficChart;
