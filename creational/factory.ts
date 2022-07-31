class IOSButton {}
class AndroidButton {}

class ButtonFactory {
  public createButton(os: string): IOSButton | AndroidButton {
    if (os === "ios") {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}

const buttonFactory = new ButtonFactory();

const iosButton = buttonFactory.createButton("ios");
const androidButton = buttonFactory.createButton("android");
