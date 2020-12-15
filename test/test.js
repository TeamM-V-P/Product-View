import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate("errors");

export let options = {
  rps: 1500,
  thresholds: {
    "errors": ["rate<0.01"],
  }
};


export default function () {
  check(http.get('http://localhost:3007/api/items9999996'), {
    "status is 200": (r) => r.status == 200}) || errorRate.add(1);
  sleep(.1)
}