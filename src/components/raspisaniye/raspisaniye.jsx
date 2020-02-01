import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
const Raspisaniye= () => {
    return(


        <div className="mt-5 mb-5">

        <h1 className="text-center">Расписание и запись</h1>    
        
        <Table bordered="true" className="w-75 m-auto text-center">
            <thead>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Аллерголог Иммунолог</td>
                    <td>Ревматолог Терапевт</td>
                    <td>Терапевт</td>
                    <td>Эндокринолог Терапевт</td>
                    <td>Терапевт Гирудотерапевт</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Кожелупенко М. В.</td>
                    <td>Марущак В. В.</td>
                    <td>Лапа Л. Г.</td>
                    <td>Скрябина Г. Л.</td>
                    <td>Черныш А. В.</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Пн</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Вт</td>
                    <td className="bg-success text-white">08-14</td>
                    <td className="bg-success text-white">09-14</td>
                    <td></td>
                    <td></td>
                    <td className="bg-success text-white">09-14</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Ср</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="bg-success text-white">09-14</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Чт</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Пт</td>
                    <td className="bg-success text-white">08-14</td>
                    <td className="bg-success text-white">09-14</td>
                    <td className="bg-success text-white">09-14</td>
                    <td></td>
                    <td className="bg-success text-white">09-14</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Сб</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Вс</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td>8</td>
                    <td>Пн</td>
                    <td></td>
                    <td></td>
                    <td className="bg-success text-white">09-14</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Вт</td>
                    <td className="bg-success text-white">08-14</td>
                    <td className="bg-success text-white">09-14</td>
                    <td></td>
                    <td></td>
                    <td className="bg-success text-white">09-14</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Ср</td>
                    <td></td>
                    <td></td>
                    <td className="bg-success text-white">09-14</td>
                    <td></td>
                    <td className="bg-success text-white">09-14</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Чт</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Пт</td>
                    <td></td>
                    <td className="bg-success text-white">09-14</td>
                    <td className="bg-success text-white">09-14</td>
                    <td></td>
                    <td className="bg-success text-white">09-14</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Сб</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Вс</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}

export default Raspisaniye