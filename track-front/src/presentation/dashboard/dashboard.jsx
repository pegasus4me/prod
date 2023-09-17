import React from 'react';
import Container from '../../infrastructure/components/charts/container';
import TotalTime from '../../infrastructure/components/charts/total.time';
import TimeData from '../../infrastructure/components/charts/time.data';

const Dashboard = () => {
    return (
        <>
           <div className='w-full'>
            <h2 className='text-center mt-5 text-2xl font-medium text-gray-800'>User Reports 📈</h2>
            {/* chart display all user time passed on all Tasks */}
            <Container title={'total time passed'}>
                    <div>
                        <TotalTime/>
                    </div>
                    <div>
                    <TimeData/>
                </div>
                
            </Container>
           </div>
        </>
    );
}

export default Dashboard;
