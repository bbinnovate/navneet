
export default function White35() {
  return (
    <section className="sec sec-white">
        <p className="tag green-text">Curriculum Coverage</p>
        <h2 className="heading blue-text mb-3">Full Subject Coverage for Both Boards.</h2>
        <div className="cur-tabs">
          <div className="cur-tab active" data-cur-tab="mhsb">
            Maharashtra State Board
          </div>
          <div className="cur-tab" data-cur-tab="cbse">
            CBSE – NCERT
          </div>
          <div className="cur-tab" data-cur-tab="rise">
            CBSE – RISE
          </div>
        </div>
        <div id="cur-mhsb" className="cur-panel active">
          <table className="cur-table">
            <tr>
              <th>Subject</th>
              <th>Grade Range</th>
            </tr>
            <tr>
              <td>Marathi</td>
              <td>1 – 10</td>
            </tr>
            <tr>
              <td>English</td>
              <td>1 – 10</td>
            </tr>
            <tr>
              <td>Mathematics</td>
              <td>1 – 8</td>
            </tr>
            <tr>
              <td>Environmental Studies</td>
              <td>3 – 5</td>
            </tr>
            <tr>
              <td>Hindi</td>
              <td>5 – 10</td>
            </tr>
            <tr>
              <td>History</td>
              <td>6 – 8</td>
            </tr>
            <tr>
              <td>General Science</td>
              <td>6 – 8</td>
            </tr>
            <tr>
              <td>Civics</td>
              <td>6 – 8</td>
            </tr>
            <tr>
              <td>Geography</td>
              <td>6 – 10</td>
            </tr>
            <tr>
              <td>Algebra</td>
              <td>9 – 10</td>
            </tr>
            <tr>
              <td>Geometry</td>
              <td>9 – 10</td>
            </tr>
            <tr>
              <td>History and Political Science</td>
              <td>9 – 10</td>
            </tr>
            <tr>
              <td>Science & Technology</td>
              <td>9 – 10</td>
            </tr>
          </table>
        </div>
        <div id="cur-cbse" className="cur-panel">
          <table className="cur-table">
            <tr>
              <th>Subject</th>
              <th>Grade Range</th>
            </tr>
            <tr>
              <td>English</td>
              <td>1 – 10</td>
            </tr>
            <tr>
              <td>Hindi</td>
              <td>1 – 10</td>
            </tr>
            <tr>
              <td>EVS</td>
              <td>3 – 5</td>
            </tr>
            <tr>
              <td>Maths</td>
              <td>1 – 10</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>6 – 10</td>
            </tr>
            <tr>
              <td>History</td>
              <td>6 – 10</td>
            </tr>
            <tr>
              <td>Geography & Economics</td>
              <td>6 – 10</td>
            </tr>
            <tr>
              <td>Civics</td>
              <td>6 – 8</td>
            </tr>
            <tr>
              <td>Economics</td>
              <td>9 – 10</td>
            </tr>
            <tr>
              <td>Democratic Politics – I</td>
              <td>9</td>
            </tr>
            <tr>
              <td>Democratic Politics – II</td>
              <td>10</td>
            </tr>
          </table>
        </div>
        <div id="cur-rise" className="cur-panel">
          <table className="cur-table">
            <tr>
              <th>Subject</th>
              <th>Grade Range</th>
            </tr>
            <tr>
              <td>English</td>
              <td>1 – 8</td>
            </tr>
            <tr>
              <td>Hindi</td>
              <td>1 – 8</td>
            </tr>
            <tr>
              <td>EVS</td>
              <td>1 – 5</td>
            </tr>
            <tr>
              <td>Maths</td>
              <td>1 – 8</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>1 – 8</td>
            </tr>
            <tr>
              <td>Social Studies (History, Civics, Geography)</td>
              <td>1 – 8</td>
            </tr>
            <tr>
              <td>Marathi</td>
              <td>1 – 8</td>
            </tr>
          </table>
        </div>
      </section>
  );
}
