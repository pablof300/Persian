import React from "react"
import styles from "./ETServiceComponent.module.css"
import { Grid, Icon, Image, Card, Header, Divider, Button } from "semantic-ui-react"
import logo from '../../../../../assets/images/exercise-tracker-service.png'
import {ExerciseSummaryDTO, ExerciseApi} from "../../../../../api/index";
import Cookies from "js-cookie";

interface State {
  exerciseSummary?: ExerciseSummaryDTO;
}

export class ETServiceComponent extends React.Component<{}, State> {
  private api: ExerciseApi = new ExerciseApi();

  constructor(props: {}) {
    super(props)
    this.state = { exerciseSummary: undefined }
    this.updateExerciseSummaryInfo = this.updateExerciseSummaryInfo.bind(this)
  }

  componentDidMount(): void {
    this.updateExerciseSummaryInfo()
  }

  async updateExerciseSummaryInfo() {
    this.api.getExerciseSummary({bearerAuth: Cookies.get("jwt")}).then(exerciseSummary => {
      this.setState({exerciseSummary: exerciseSummary})
    }).catch(e => {
      console.log(e)
    })
  }

  render() {
    return (
      <Grid.Column width={6}>
        <Card className={styles.Card}>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={logo}
            />
            <Card.Header>ExerciseTracker</Card.Header>
            <Card.Meta>status: online</Card.Meta>
            <Card.Description>
              <Card centered>
                <Card.Content>
                  <Grid>
                    <Grid.Row columns={2} relaxed='very' >
                      <Grid.Column>
                        <Header textAlign={'center'}>distance ran
                          <Header.Subheader>
                            <h1>{!!this.state.exerciseSummary ? this.state.exerciseSummary.milesRanToday : '-'}</h1>
                          </Header.Subheader>
                          <Header.Subheader>
                            <p>miles</p>
                          </Header.Subheader>
                        </Header>
                      </Grid.Column>
                      <Grid.Column>
                        <Header textAlign={'center'}>time in gym
                          <Header.Subheader>
                            <h1>{!!this.state.exerciseSummary ? this.state.exerciseSummary.numberOfMinutesInGym : '-'}</h1>
                          </Header.Subheader>
                          <Header.Subheader>
                            <p>mins</p>
                          </Header.Subheader>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row columns={2} relaxed='very' >
                      <Grid.Column>
                        <Header textAlign={'center'}>streak
                          <Header.Subheader>
                            <h1>{!!this.state.exerciseSummary ? this.state.exerciseSummary.lengthOfStreakInDays : '-'}</h1>
                          </Header.Subheader>
                          <Header.Subheader>
                            <p>days</p>
                          </Header.Subheader>
                        </Header>
                      </Grid.Column>
                      <Grid.Column>
                        <Header textAlign={'center'}>
                          <Header.Subheader>
                            <Button size={'small'} primary style={{marginBottom: '5px'}} >View stats</Button>
                            <Button size={'small'}>Add session</Button>
                          </Header.Subheader>
                        </Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card.Content>
                {/*<Button color={'red'}>authenticate</Button>*/}
              </Card>
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}