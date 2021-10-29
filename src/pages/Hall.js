import React, { Component } from 'react';
import _ from 'lodash';
import Tickets from "../helpers/Tickets";
import TicketForm from "../components/TicketForm";
import Wrapper from "../components/Wrapper";

const ROWS = 15;
const SETS = 20;

class Hall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRow: null,
      activeSet: null,
      activeName: '',
      activePhone: '',
      data: Tickets.get(),
    }
  }


  handleSelect = (row, set) => {
    const { data } = this.state;
    const isCurrent = data.find(d => d.row === row && d.set === set);
    if (isCurrent){
      this.setState({ activeRow: row, activeSet: set, activeName: isCurrent.fullName, activePhone: isCurrent.phone });
    } else {
      this.setState({ activeRow: row, activeSet: set });
    }
  }

  handleClose = () => {
    this.setState({ activeRow: null, activeSet: null, activeName: '', activePhone: '' })
  }

  handleSubmit = (datum) => {
    const { data } = this.state;
    const isCurrent = data.find((el) => el.row === datum.row && el.set === datum.set);
    if (isCurrent){
      data.splice(data.indexOf(isCurrent), 1);
    }
    data.push(datum)
    Tickets.save(1, data)
    this.setState({ data, activeRow: null, activeSet: null, activeName: '', activePhone: '' });
  }

  handleDelete = (row, set) => {
    const { data } = this.state;
    const current = data.find((el) => el.row === row && el.set === set);
    data.splice(data.indexOf(current), 1);
    Tickets.save(1, data)
    this.setState({ data, activeRow: null, activeSet: null, activeName: '', activePhone: '' });
  }

  render() {
    const { data, activeRow, activeSet, activeName, activePhone } = this.state;
    return (
      <Wrapper>
        <table className="hall">
          <tbody>
            {_.range(1, ROWS + 1).map((row) => (
              <tr key={row}>
                {_.range(1, SETS + 1).map(set => (
                  <td
                    key={set}
                    className={data.find(d => d.row === row && d.set === set) ? 'active' : null}
                    onClick={() => this.handleSelect(row, set)}
                  >
                    {`${row} / ${set}`}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <TicketForm
          row={activeRow}
          set={activeSet}
          fullName={activeName}
          phone={activePhone}
          data={data}
          onClose={this.handleClose}
          onSubmit={this.handleSubmit}
          onDelete={this.handleDelete}
        />
      </Wrapper>
    );
  }
}

export default Hall;

