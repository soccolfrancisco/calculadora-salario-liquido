import React, {Component} from 'react';
import css from './header.module.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className={css.container}>
                        <div className="row">
                            <p>
                                Desenvolvido por <strong>Francisco Jr Soccol</strong>&nbsp;
                                <i className="tiny material-icons">copyright</i>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;