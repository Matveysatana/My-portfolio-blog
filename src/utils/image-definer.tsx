import HtmlIcn from 'assets/icons/svg/html5.svg'
import CssIcn from 'assets/icons/svg/css3.svg';
import JsIcn from 'assets/icons/svg/javascript.svg';
import ReactIcn from 'assets/icons/svg/react.svg';
import TsIcn from 'assets/icons/svg/typescript.svg';
import PhpIcn from 'assets/icons/svg/php.svg';
import AngularIcn from 'assets/icons/svg/angular.svg';
import JqueryIcn from 'assets/icons/svg/jquery.svg';


export const ImageDefiner = (name: string) => {
  switch (name) {
    case "HTML":
      return <HtmlIcn />;
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