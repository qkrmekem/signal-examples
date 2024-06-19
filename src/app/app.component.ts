import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // 시그널은 값을 감싸는 컨테이너 또는 래퍼임
  // 앵귤러는 시그널을 통해 페이지의 어떤 부분이 변경이 필요한지 결정할 수 있음
  // 이로인해 앵귤러는 페이지 업데이트를 더 최적화된 방식으로 할 수 있음
  // 이는 기존의 change detection이 모든 컴포넌트 트리를 변경 전,후로 비교하는 것보다 훨씬 효율적임

  // 만약 시그널을 사용하는 다른 부분에서 값 변화가 필요하다고 하면
  // 이를 따로 알릴 필요 없이 이 값의 구독자에게 변화를 전파한다. 
  // 그리고 이런 구독자를 시그널에서는 소비자(consumer)라고 한다.
  counter = signal(0);

  constructor(){}

  increment(){
    // this.counter++;
    this.counter.set(this.counter() + 1 );
  }
}
