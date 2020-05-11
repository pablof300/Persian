import React from "react"
import styles from "./SkillComponent.module.css"
import { Grid, Header, Icon } from "semantic-ui-react"

interface Props {
  type: string
  list: string
}

export class SkillComponent extends React.Component<Props, {}> {
  render() {
    return (
      <>
        <Grid.Row>
          <Grid.Column width={3} />
          <Grid.Column width={3}>
            <Header as="h4" centered>
              <Icon name="info" />
              {this.props.type}
            </Header>
          </Grid.Column>
          <Grid.Column width={8}>{this.props.list}</Grid.Column>
        </Grid.Row>
      </>
    )
  }
}
