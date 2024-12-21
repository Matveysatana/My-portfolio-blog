import HtmlIcn from 'assets/images/svg/html5.svg'
import CssIcn from 'assets/images/svg/css3.svg';
import JsIcn from 'assets/images/svg/javascript.svg';
import ReactIcn from 'assets/images/svg/react.svg';
import TsIcn from 'assets/images/svg/typescript.svg';
import PhpIcn from 'assets/images/svg/php.svg';
import AngularIcn from 'assets/images/svg/angular.svg';
import JqueryIcn from 'assets/images/svg/jquery.svg';


export const ImageDefiner = (name: string) => {
  switch (name) {
    case "HTML":
      return <HtmlIcn /> ;
    case "CSS":
      return <CssIcn />;
    case "JavaScript":
      return <JsIcn />;
    case "React":
      return <ReactIcn />;
    case "TypeScript":
      return <TsIcn />;
    case "PHP":
      return <PhpIcn />;
    case "Angular":
      return <AngularIcn />;
    case "jQuery":
      return <JqueryIcn />;
    default:
      return;
  }
}