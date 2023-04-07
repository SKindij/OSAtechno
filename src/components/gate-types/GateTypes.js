import React from 'react';
import slidingBody from './sliding-body.jpg';
import swingBody from './swing-body.jpg';
import garageBody from './garage-body.jpg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

class GateTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: [false, false, false]
    };
  }
  
  toggleShowMore(index) {
    this.setState((prevState) => {
      const showMore = prevState.showMore.map((value, i) =>
        i === index ? !value : value
      );
      return { showMore };
    });
  }


  render() {
    const { showMore } = this.state;

    return (
      <Container>
        <h2 className="mt-5 mb-4">Виберіть ваш тип воріт до яких потрібна автоматика:</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={slidingBody} className="card-img" />
              <Card.Body>
                <Card.Title>відкатні ворота</Card.Title>
                <Card.Text className="card-text">
                  Подібні конструкції можуть відсуватися вправо чи вліво вздовж лінії паркану. 
				  Для цього каркас воріт кріпиться (найчастіше приварюється) до консольної труби, що рухається на двох опорних роликових каретках.
                {showMore[0] && (
                    <span>
                      Для більшого комфорту і безпеки можна додатково встановити
                      систему фотоелементів, що при забезпеченні зв'язку між
                      ними перешкодою, зупиняють процес руху воріт.
                    </span>
                  )}			
				</Card.Text>
                <Button variant="primary" onClick={() => this.toggleShowMore(0)}>
                  {showMore[0] ? 'Show Less...' : 'Read More...'}
                </Button>
              </Card.Body>
            </Card>
          </Col>		
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={swingBody} className="card-img" />
              <Card.Body>
                <Card.Title>розпашні ворота</Card.Title>
                <Card.Text className="card-text">
                  Їх стулки (половинки) кріпляться на петлях до стовпів. Вони можуть відчинятися або всередину двору, або назовні (на вулицю). 
				  Модель автоматики тут напряму залежить від ширини стовпів та розміщення петель на них.
                 {showMore[1] && (
                    <span>
                      Для більшого комфорту і безпеки можна додатково встановити
                      систему фотоелементів, що при забезпеченні зв'язку між
                      ними перешкодою, зупиняють процес руху воріт.
                    </span>
                  )}              
			   </Card.Text>
                <Button variant="primary" onClick={() => this.toggleShowMore(1)}>
                  {showMore[1] ? 'Show Less...' : 'Read More...'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={garageBody} className="card-img" />
              <Card.Body>
                <Card.Title>ворота гаражні</Card.Title>
                <Card.Text className="card-text">
                  Їх іще називають секційними. Полотна таких воріт від'їжджають вверх під стелю гаража, та мають декілька варіантів типів (способів) підйому над проємом.
                {showMore[2] && (
                    <span>
                      Для більшого комфорту і безпеки можна додатково встановити
                      систему фотоелементів, що при забезпеченні зв'язку між
                      ними перешкодою, зупиняють процес руху воріт.
                    </span>
                  )}                
				</Card.Text>
                <Button variant="primary" onClick={() => this.toggleShowMore(2)}>
                  {showMore[2] ? 'Show Less...' : 'Read More...'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }  
}
export default GateTypes;
