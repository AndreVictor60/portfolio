import React from 'react';

const Clock = ({timerDays, timerHours,  timerMinutes, timerSeconds}) => {

    return (
        <>
            <section className='timer-container'>
                <section className='timer'>
                    <div className='clock'>
                        <section>
                            <p>{timerDays}</p>
                            <small>{timerDays <= 1  ? "Jour" : "Jours"}</small>
                        </section>
                        <section>
                            <p>{timerHours}</p>
                            <small>{timerHours <= 1  ? "Heure" : "Heures"}</small>
                        </section>
                        <section>
                            <p>{timerMinutes}</p>
                            <small>{timerMinutes <= 1 ? "Minute" : "Minutes"}</small>
                        </section>
                        <section>
                            <p>{timerSeconds}</p>
                            <small>{timerSeconds <= 1 ? "seconde" : "secondes"}</small>
                        </section>
                    </div>
                </section>
            </section>
        </>
    );
};

Clock.defaultProps  = {
    timerDays: 20,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
}

export default Clock;