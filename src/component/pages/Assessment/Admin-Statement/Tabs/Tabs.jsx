import { useState } from "react";
import "./tabs.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Switch, FormControlLabel } from '@mui/material'
// import { useHistory, useParams } from "react-router-dom";
// import axios from "axios";
import swal from "sweetalert";



const Tabs = ({ questions }) => {



  // const api_url = `http://localhost:3004/questions/`;

  // const deleteQuestion = async (id) => {
  //   try {
  //     return await axios.delete(`${api_url}/${id}`);
  //   } catch (error) {
  //     console.log("error while calling delete user api", error.message);
  //   }
  // };

  // const history = useHistory();

  let [currentTab, setCurrentTab] = useState("1");

  let [checked, setChecked] = useState(false);

  let handleAnswer = (event) => {
    // if ( questions.sOptions.isAnswer ) {
    //     setChecked(true)
    // } else {
    //     setChecked( false )
    // }

    setChecked(event.target.checked);
  };

  let handleTabClick = (e) => {

    setCurrentTab(e.target.id);
    localStorage.setItem("items", e.target.id);

  };

  let [textField, setTextField] = useState([]);

  const handleAdd = () => {
    const addOption = [...textField, []];
    setTextField(addOption);
  };

  const handleDelete = (index, i) => {
    const delVal = [...textField];
    delVal.splice(i, 1);
    setTextField(delVal);
    console.log(delVal);
  };

  const handleChange = (onChangeValue, i) => {
    const inputData = [...textField];
    inputData[i] = onChangeValue.target.value;
    setTextField(inputData);
    localStorage.setItem("onChangeValue", onChangeValue.target.value)
  };

  //   const handleDelete = (i) => {
  //     const delVal = [...textField];
  //     delVal.splice(i, 1);
  //     setTextField(delVal);
  //   };

  const [list, setList] = useState(questions);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);
    return result;
  };

  const onEnd = (result) => {
    // console.log(result);

    let sourceIndex = result.source.index;

    let destinationIndex = result.destination.index;

    setList(reorder(list, sourceIndex, destinationIndex));
  };



  // const handleUpdate = () => {

  // const updateValue = {sDescription}

  // const getitem = localStorage.getItem("items");

  // fetch(`http://103.160.153.38:8020/limens/statements_view/${getitem}/`, {
  //   method: "PUT",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(  ),
  // }).then(() => {
  //   history.push("/admin-statement");
  // });

  // localStorage.removeItem("items");
  //      console.log();
  // };


  // let handleDeleteHole = async () => {

  //   const getitem = localStorage.getItem("items");

  //   fetch(`http://103.160.153.38:8020/limens/statements_view/${getitem}`, {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   }).then(() => {
  //     history.push("/dashboard");

  //   });
  //   swal({
  //     title: "Done!",
  //     text: `Deleted Successfully`,
  //     icon: "success",
  //     button: "Ok",
  //   });
  //    console.log(getitem);
  //   localStorage.removeItem("items");
  // };

  let handleDeleteHole = async () => {

    const confirm = window.confirm("Are you sure, you want to delete this Statement?")
    console.log(confirm)
    if (confirm) {
      const getitem = localStorage.getItem("items");

      fetch(`http://103.160.153.38:8020/limens/statements_view/${getitem}/`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(() => {
        window.location.reload();

      });
      swal({
        title: "Done!",
        text: `Deleted Successfully`,
        icon: "success",
        button: "Ok",
      });
      console.log(getitem);
      localStorage.removeItem("items");
    }

  };

  // const handleDeleteHole = async (id) => {

  // console.log(id);

  //   await axios.delete(`http://103.160.153.38:8020/limens/statements_view/${id}`) 
  //   history.push('/dashboard')
  // }



  return (
    <div className="tabTypeQuestion">
      <div className="tab">
        {/* <DragDropContext onDragEnd={onEnd}>
          <Droppable droppableId="12345" direction="horizontal">
            {(provider, snapshot) => {
              return (
                <div ref={provider.innerRef}>
                  {list.map((question, index) => {
                    return (
                      <Draggable
                        draggableId={question.sStatementID}
                        key={question.sStatementID}
                        index={index}
                      >
                        {(provider, snapshot) => {
                          return (
                            <div
                                ref={provider.innerRef}
                              {...provider.draggableProps}
                              {...provider.dragHandleProps}
                              className="draggable-tab"
                            >
                              <button
                                key={index}
                                id={question.sStatementID}
                                // disabled={currentTab === `${question.sStatementID}`}
                                onClick={handleTabClick}
                              >
                                Slide <span> {index + 1} </span>
                              </button>
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {provider.placeholder}
                </div>
              );
            }}
          </Droppable>
        </DragDropContext> */}

        {
          questions.map((tab, i) => {
            return (
              <div className="draggable-tab">
                <button
                  key={i} 
                  id={tab.sStatementID}
                  // disabled={currentTab === `${tab.sStatementID}`}
                  onClick={handleTabClick}
                >
                  Slide <span> {i + 1} </span>
                </button>
              </div>
            )
          })
        }
      </div>
      <div className="content">
        {questions.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.sStatementID}` && (
              <div>
                <div>
                  <h5> Statement </h5>
                  <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    defaultValue={tab.sDescription}
                    value={tab.sDescription}
                    style={{
                      width: "100%",
                      height: "150px",
                      padding: "10px",
                      outline: "none",
                      border: "1px solid rgba(55, 59, 59, 0.2)",
                      borderRadius: "5px",
                    }}

                  />
                </div>
                <hr />
                {tab.sOptions.length !== 0 && (
                  <div>
                    <h5> Option Details </h5>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow sx={{ fontSize: 40 }}>
                            <TableCell
                              align="center"
                              sx={{ fontSize: 20, color: "#007A3E" }}
                            >
                              {" "}
                              Options{""}
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{ fontSize: 20, color: "#007A3E" }}
                            >
                              Correct(Yes/No)
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{ fontSize: 20, color: "#007A3E" }}
                            >
                              Prompt(Wrong Answer)
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{ fontSize: 20, color: "#007A3E" }}
                            >
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {tab.sOptions.map((option, i) => (
                            <TableRow
                              key={i}

                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                <TextareaAutosize
                                  maxRows={4}
                                  aria-label="maximum height"
                                  defaultValue={option.text}
                                  onChange={handleChange}
                                  style={{
                                    width: "100%",
                                    fontSize: 17,
                                    padding: "10px",
                                    outline: "none",
                                    border: "1px solid rgba(55, 59, 59, 0.2)",
                                    borderRadius: "5px",
                                  }}
                                />
                              </TableCell>
                              <TableCell align="center">
                                <FormControlLabel
                                  control={
                                    <Switch
                                      checked={option.isAnswer}
                                      onChange={handleAnswer}
                                      color="primary"
                                    />
                                  }
                                />
                              </TableCell>
                              <TableCell align="center">
                                <TextareaAutosize
                                  maxRows={4}
                                  aria-label="maximum height"
                                  defaultValue={option.isPrompt}
                                  style={{
                                    width: "100%",
                                    fontSize: 17,
                                    padding: "10px",
                                    outline: "none",
                                    border: "1px solid rgba(55, 59, 59, 0.2)",
                                    borderRadius: "5px",
                                  }}
                                />
                              </TableCell>
                              <TableCell align="center">
                                <button
                                  style={{
                                    height: "50px",
                                    width: "50px",
                                    borderRadius: "10px",
                                  }}
                                  onClick={() => {
                                    handleDelete(i);
                                  }}
                                >
                                  <DeleteIcon />
                                </button>
                              </TableCell>
                            </TableRow>
                          ))}
                          {textField.map((data, i) => (
                            <TableRow
                              key={i}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                <TextareaAutosize
                                  maxRows={4}
                                  aria-label="maximum height"
                                  defaultValue={data}
                                  style={{
                                    width: "100%",
                                    fontSize: 17,
                                    padding: "10px",
                                    outline: "none",
                                    border: "1px solid rgba(55, 59, 59, 0.2)",
                                    borderRadius: "5px",
                                  }}
                                />
                              </TableCell>
                              <TableCell
                                align="center"
                                style={{ fontSize: 17 }}
                              >
                                <FormControlLabel
                                  control={
                                    <Switch
                                      checked={checked}
                                      onChange={handleAnswer}
                                      color="primary"
                                    />
                                  }
                                />
                              </TableCell>
                              <TableCell align="center">
                                <TextareaAutosize
                                  maxRows={4}
                                  aria-label="maximum height"
                                  defaultValue={data}
                                  style={{
                                    width: "100%",
                                    fontSize: 17,
                                    padding: "10px",
                                    outline: "none",
                                    border: "1px solid rgba(55, 59, 59, 0.2)",
                                    borderRadius: "5px",
                                  }}
                                />
                              </TableCell>
                              <TableCell align="center">
                                <button
                                  style={{
                                    height: "50px",
                                    width: "50px",
                                    borderRadius: "10px",
                                  }}
                                  onClick={() => {
                                    handleDelete(i);
                                  }}
                                >
                                  <DeleteIcon />
                                </button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                        <div style={{ margin: " 20px " }}>
                          <Button
                            className=" btn btn-outline-success"
                            style={{
                              textAlign: "center",
                              width: "auto",
                              height: "40px",
                            }}
                            onClick={() => handleAdd()}
                          >
                            Add Option
                          </Button>
                        </div>
                      </Table>
                    </TableContainer>
                  </div>
                )}
                <div className="tab-body-btns">
                  <button
                    className="btn btn-primary"
                  // onClick={() => {
                  //   handleUpdate();
                  // }

                  >
                    UPDATE
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDeleteHole();
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Tabs;
